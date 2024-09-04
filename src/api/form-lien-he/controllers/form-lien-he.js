'use strict';

/**
 * form-lien-he controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const { GoogleSpreadsheet } = require('google-spreadsheet');
const { JWT } = require('google-auth-library');

function getGsheetId(url){
    if(!url) return false
    const arr = url.split('/')
    return arr[5]
}

module.exports = createCoreController('api::form-lien-he.form-lien-he',{
    submitForm: async(ctx) => {

        try {

            const getConfig = await await strapi.plugin("google-sheet-config").service("googleSheetConfig").find(ctx.query);

            if(!getConfig) throw new Error('Chưa config gsheets')

            const gSheetId = getGsheetId(getConfig.link_gsheet)
            
            if(!gSheetId) throw new Error('Chưa config gsheets')

            const serviceAccountAuth = new JWT({
                email: process.env.GSHEET_CLIENT_EMAIL,
                key: process.env.GSHEET_CLIENT_PRIVATE_KEY,
                scopes: 'https://www.googleapis.com/auth/spreadsheets',
            });
    
            const doc = new GoogleSpreadsheet(gSheetId, serviceAccountAuth);
    
            await doc.loadInfo();
            
            const entry = await strapi.entityService.create('api::form-lien-he.form-lien-he', {
                data: ctx.request.body,
                populate: {
                    dich_vu_tham_my: true,
                    bac_sy: true
                }
            });

            const sheet = doc.sheetsByTitle[getConfig?.sheet_name];

            await sheet.addRow({
                id: entry.id,
                name: entry.name,
                phone: entry.phone,
                region: entry.region,
                service: entry.dich_vu_tham_my.title,
                time: entry.time,
                doctor: entry?.bac_sy?.title || "",
                created_at: entry.createdAt
            })

            ctx.body = entry
            
        } catch (error) {

            await strapi.entityService.create('api::bug-log.bug-log', {
                data: {
                    name: "Lỗi Google Sheets",
                    detail: error.message
                },
            });

            ctx.body = error
        }
    }
})