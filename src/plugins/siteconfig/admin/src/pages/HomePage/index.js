/*
 *
 * HomePage
 *
 */

import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { BaseHeaderLayout, Card, ContentLayout, Layout, CardBody, Button, Alert, Flex } from '@strapi/design-system';
import FormEditSiteConfig from './form';
import { useFormik } from 'formik';
import { request } from '@strapi/helper-plugin';

const fields = {
  "license": {
    "type": "string",
    "label": "Giấy phép kinh doanh"
  },
  "taxcode": {
    "type": "string",
    "label": "Mã số thuế"
  },
  "taxdate": {
    "type": "string",
    "label": "Ngày cấp"
  },
  "taxcom": {
    "type": "string",
    "label": "Nơi cấp"
  },
  "address": {
    "type": "string",
    "label": "Địa chỉ"
  },
  "hotline": {
    "type": "string",
    "label": "Hotline"
  },
  "email": {
    "type": "string",
    "label": "Email"
  },
  "website": {
    "type": "string",
    "label": "Website"
  },
  "facebook": {
    "type": "string",
    "label": "Facebook"
  },
  "youtube": {
    "type": "string",
    "label": "Youtube"
  },
  "instagram": {
    "type": "string",
    "label": "Instagram"
  },
  "twitter": {
    "type": "string",
    "label": "Twitter"
  },
  "zalo": {
    "type": "string",
    "label": "Zalo"
  },
  "copyright": {
    "type": "string",
    "label": "Copyright Text"
  }
}

function getInitialValues() {
  let result = {}
  Object.keys(fields).map(item => result[item] = "")
  return result
}

async function getConfigValues(setData) {
  try {
    const entry = await request("/siteConfig/get", {
      method: "GET"
    })
    setData(entry)
  } catch (error) {
    console.log("🚀 ~ getConfigValues ~ error:", error)
  }
}

const HomePage = () => {

  const [data, setData] = useState(getInitialValues())

  const [loading, setLoading] = useState(false)

  const [show, setShow] = useState({
    display: false,
    status: 'success',
    message: ""
  })

  const formik = useFormik({
    initialValues: data,
    enableReinitialize: true,
    onSubmit: async (values) => {
      setLoading(true)
      setShow({
        display: false,
        status: 'success',
        message: ""
      })
      try {
        await request('/siteConfig/update', {
          method: 'PUT',
          body: values
        })
        setShow({
          display: true,
          status: 'success',
          message: "Cập nhật thành công"
        })
      } catch (error) {
        console.log("🚀 ~ onSubmit: ~ error:", error)
        setShow({
          display: true,
          status: 'error',
          message: "Cập nhật Thất bại, vui lòng liên hệ admin để được hỗ trợ"
        })
      }
      setLoading(false)
    }
  })

  useEffect(() => {
    getConfigValues(setData)
  }, [])
  return (
    <Layout>
      <form onSubmit={formik.handleSubmit}>
        <BaseHeaderLayout
          title="Cấu hình cài đặt website"
          subtitle="Cấu hình cài đặt website"
          as="h2"
        />
        <ContentLayout>
          <Flex direction="column" gap="3" justifyContent="flex-start" alignItems="flex-start">
            {show.display &&
              <Alert closeLabel="Close" variant={show?.status} style={{ minWidth: 1000 }}>
                {show?.message}
              </Alert>
            }
            <Card style={{minWidth: "1000px"}}>
              <CardBody>
                <FormEditSiteConfig formik={formik} fields={fields} loading={loading}/>
              </CardBody>
            </Card>
          </Flex>
        </ContentLayout>
      </form>
    </Layout>
  );
};

export default HomePage;
