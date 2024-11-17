import { HStack, Text } from '@chakra-ui/react'
import { Button } from './ui/button'
import { BsChevronDown } from 'react-icons/bs'
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from './ui/menu'
import usePlatforms from '@/hooks/usePlatforms'

const PlatformSelector = () => {
  const {data, error} = usePlatforms()
  if (error) return null
  return (
    <MenuRoot>
        <MenuTrigger asChild>
            <Button><HStack><Text>Platform</Text><BsChevronDown /></HStack></Button>
        </MenuTrigger>
        <MenuContent>
          {data.map(platform => <MenuItem key={platform.id} value={platform.slug}>{platform.name}</MenuItem>)}
        </MenuContent>
    </MenuRoot>
  )
}

export default PlatformSelector