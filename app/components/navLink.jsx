"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
 
export const NavLink = ({ href, exact, children, ...props }) => {
  const pathname = usePathname()
  const active = "text-sm border-b-2 border-red-500"
  const isActive = exact ? pathname === href : pathname.startsWith(href)

  if (isActive) {
    props.className += active
  }
 
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  )
}