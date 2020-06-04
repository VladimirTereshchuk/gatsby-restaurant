import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import img from "../images/bcg/contactBcg.jpeg"

const ContactPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageHeader img={img}>
      <Banner title="contact us" subtitle="let's get in touch" />
    </PageHeader>
  </Layout>
)

export default ContactPage
