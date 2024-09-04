import { Flex, Typography } from '@strapi/design-system';
import { FontSize } from 'ckeditor5';
import Step1 from './step1.png'
import Step2 from './step2.png'

export default function DocGoogleSheetPlugins(){

    return (
       <Flex gap={3} direction="column" justifyContent="flex-start" alignItems="flex-start">
            <Typography style={{fontWeight: 700, fontSize: 18}}>Hướng dẫn kết nối file Google Sheets để nhận data</Typography>
            <Typography style={{fontWeight: 500}}><strong>Bước 1:</strong> Tạo file Google sheets với dòng đầu gồm các cột (id,name,phone,region,service,time,doctor,created_at)</Typography>
            <img src={Step1} />
            <Typography style={{fontWeight: 500}}><strong>Bước 2:</strong> Chia sẻ file cho email: thepyo@thepryo.iam.gserviceaccount.com với quyền người chỉnh sửa</Typography>
            <img src={Step2} />
            <Typography style={{fontWeight: 500}}><strong>Bước 3:</strong> Copy link file google sheets và tên bảng (Sheet name) vào cột bên trái và nhấn lưu lại</Typography>
       </Flex>
    )
}