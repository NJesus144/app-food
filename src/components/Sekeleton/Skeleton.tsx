import { SkeletonElement } from './styles'

export interface SekeletonProps {
  type: 'title' | 'text' | 'image' | 'thumbnail'
}

export function Skeleton({ type }: SekeletonProps) {
  return <SkeletonElement type={type} />
}
