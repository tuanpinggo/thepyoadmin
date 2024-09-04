import { Button, Flex, TextInput, Textarea } from "@strapi/design-system";

export default function FormEditSiteConfig({formik,fields, loading}){
    return(
        <Flex direction="column" gap={5} style={{padding: "20px", width: '100%'}} alignItems="stretch">
            <TextInput
                placeholder="Nhập tên công ty"
                size="M"
                type="text"
                id="company"
                name="company"
                label="Tên công ty"
                value={formik.values.company}
                onChange={formik.handleChange}
                style={{flexGrow: 1}}
                required
            />
            <Textarea
                placeholder="Nhập tên công ty"
                size="M"
                type="text"
                id="description_contact"
                name="description_contact"
                label="Mô tả ngắn"
                value={formik.values.description_contact}
                onChange={formik.handleChange}
                style={{flexGrow: 1}}
                required
            />
            
            {Object.keys(fields).map((item,key) => {
                    return <TextInput
                        placeholder={fields[item].label}
                        size="M"
                        type="text"
                        id={item}
                        name={item}
                        label={fields[item].label}
                        value={formik.values[item]}
                        onChange={formik.handleChange}
                        style={{flexGrow: 1}}
                        key={key}
                        required
                    />
                }
            )}
            <Flex>
                <Button type={"submit"} onClick={formik.handleSubmit} loading={loading}>Lưu lại</Button>
            </Flex>
        </Flex>
    )
}