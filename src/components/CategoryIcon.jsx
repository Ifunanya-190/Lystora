import {
  HiOutlineHeart,
  HiOutlineAcademicCap,
  HiOutlineCurrencyDollar,
  HiOutlineScale,
  HiOutlineBriefcase,
  HiOutlineHome,
  HiOutlineCake,
  HiOutlineDesktopComputer,
  HiOutlineCog,
  HiOutlineLocationMarker,
} from 'react-icons/hi'

const iconMap = {
  health: HiOutlineHeart,
  education: HiOutlineAcademicCap,
  finance: HiOutlineCurrencyDollar,
  legal: HiOutlineScale,
  jobs: HiOutlineBriefcase,
  realestate: HiOutlineHome,
  food: HiOutlineCake,
  technology: HiOutlineDesktopComputer,
  localservices: HiOutlineCog,
}

export default function CategoryIcon({ name, className = 'text-2xl' }) {
  const Icon = iconMap[name] || HiOutlineLocationMarker
  return <Icon className={className} />
}
