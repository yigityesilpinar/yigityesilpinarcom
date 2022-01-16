import React from 'react'

import Typography from 'src/components/Typography'

import { FooterContainer, FooterLink, FooterLinksContainer } from './styles'

const currentYear = new Date().getFullYear()

import { contacts } from 'src/data'

const filteredContacts = contacts.filter((c) => ['linkedin', 'github'].includes(c.id))

const Footer = () => (
  <FooterContainer>
    <Typography contrast> Copyright © {currentYear} yigityesilpinar.com - All rights reserved.</Typography>
    <FooterLinksContainer>
      {filteredContacts.map(({ id, link, iconSrc }) => (
        <FooterLink key={id} href={link} target="_blank">
          <img src={iconSrc} />
        </FooterLink>
      ))}
    </FooterLinksContainer>
  </FooterContainer>
)

export default Footer
