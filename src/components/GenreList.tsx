import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, Image, List, Spinner } from "@chakra-ui/react";
import { Button } from "./ui/button";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre|null;
}

const GenreList = ({selectedGenre,onSelectGenre}: Props) => {
  const { data: genres, isLoading, error } = useGenres();

  if (isLoading) return <Spinner />
  if (error) return null
  
  return (
    <List.Root>
      {genres.map((genre) => (
        <List.Item key={genre.id}>
          <HStack>
            <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
            <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' :'normal'} onClick={()=>onSelectGenre(genre)} variant='plain' fontSize='lg'>{genre.name}</Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
