/*
 *
 * HomePage
 *
 */

import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { BaseHeaderLayout, ContentLayout, Layout, Card, CardBody, Flex, Box, TextInput, Button, Alert } from '@strapi/design-system';
import DocGoogleSheetPlugins from './docs';
import { request } from '@strapi/helper-plugin';

const getData = async (setConfig) => {
  const entry = await request("/google-sheet-config/find", {
    method: "GET"
  })
  setConfig({
    sheet_link: entry?.link_gsheet,
    sheet_name: entry?.sheet_name
  })
}

const HomePage = () => {

  const [loading,setLoading] = useState(false)

  const [show,setShow] = useState({
    display: false,
    status: 'success',
    message: ""
  })


  const [config,setConfig] = useState({
    sheet_link: "",
    sheet_name: ""
  })

  useEffect(()=>{
    getData(setConfig)
  },[])

  const handleSubmit = async () => {
    setLoading(true)
    setShow({
      display: false,
      status: 'success',
      message: ""
    })

    try {
      await request("/google-sheet-config/update", {
        method: 'PUT',
        body: {
          data: {
            link_gsheet: config?.sheet_link,
            sheet_name: config?.sheet_name
          }
        }
      })
      setShow({
        display: true,
        status: 'success',
        message: "Cập nhật thành công"
      })
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error)
      setShow({
        display: true,
        status: 'error',
        message: "Cập nhật Thất bại, vui lòng liên hệ admin để được hỗ trợ"
      })
    }
    setLoading(false)
  }

  return (
    <Layout>
      <BaseHeaderLayout
        title="Google Sheet Config"
        subtitle="Cấu hình file google sheet nhận dữ liệu từ form liên hệ khách hàng ngoài website"
        as="h2"
      />

      <ContentLayout>
      <Card>
      <CardBody>
        <Flex 
          gap={{
            initial: 1,
            medium: 2,
            large: 8
          }} 
          direction={'column'} 
          alignItems={{
            initial: 'center',
            medium: 'flex-start'
          }}
        >
          
            <Flex 
              hasRadius 
              direction="column"
              gap={6}
              justifyContent="flex-start"
              alignItems="flex-start"
              component="form"
              onSubmit={handleSubmit}
              style={{padding: 20}}
            >
              {show.display &&
                <Alert closeLabel="Close" variant={show?.status} style={{minWidth: 600}}>
                  {show?.message}
                </Alert>
              }
              <TextInput 
                placeholder="This is a content placeholder"
                size="M"
                type="text"
                id="sheetLink"
                name="sheetLink"
                label="Link Google Sheets"
                style={{minWidth: 600}}
                value={config?.sheet_link}
                onChange={(e) => setConfig({
                  ...config,
                  sheet_link: e.target.value
                })}
              />

              <TextInput 
                placeholder="This is a content placeholder"
                size="M"
                type="text"
                label="Tên bảng dữ liệu (Sheet name)"
                id="sheetName"
                name="sheetName"
                style={{minWidth: 600}}
                value={config?.sheet_name}
                onChange={(e) => setConfig({
                  ...config,
                  sheet_name: e.target.value
                })}
              />

            <Button type="submit" onClick={handleSubmit} loading={loading}>Lưu lại</Button>
          </Flex>
          <Box paddingTop={5} paddingLeft={3}>
              <DocGoogleSheetPlugins />
          </Box>
          
          
        </Flex>
        </CardBody>
          </Card>
      </ContentLayout>
    </Layout>
  );
};

export default HomePage;
