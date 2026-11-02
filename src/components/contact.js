import { org } from '../data/site.js'

export const telHref = `tel:${org.phone.replace(/\s/g, '')}`
export const mailHref = (subject) => `mailto:${org.email}?subject=${encodeURIComponent(subject)}`
