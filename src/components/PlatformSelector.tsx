import { HStack, Text } from '@chakra-ui/react'
import { Button } from './ui/button'
import { BsChevronDown } from 'react-icons/bs'
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from './ui/menu'
import usePlatforms from '@/hooks/usePlatforms'
import { Platform } from '@/hooks/useGames'

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({onSelectPlatform, selectedPlatform}: Props) => {
  const {data, error} = usePlatforms()
  if (error) return null
  return (
    <MenuRoot>
        <MenuTrigger asChild>
            <Button><HStack><Text>{selectedPlatform?.name || 'Platforms'}</Text><BsChevronDown /></HStack></Button>
        </MenuTrigger>
        <MenuContent>
          {data?.results.map(platform => <MenuItem onClick={()=> onSelectPlatform(platform)} key={platform.id} value={platform.slug}>{platform.name}</MenuItem>)}
        </MenuContent>
    </MenuRoot>
  )
}

export default PlatformSelector