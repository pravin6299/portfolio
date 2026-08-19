import { ArrowUpRight } from 'lucide-react'

export default function Button({ href, children, variant = 'primary', icon: Icon = ArrowUpRight, external = false }) {
  return (
    <a className={`button button--${variant}`} href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
      <span>{children}</span>{Icon && <Icon size={16} aria-hidden="true" />}
    </a>
  )
}
