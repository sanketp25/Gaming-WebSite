import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenres";
import getCroppedImage from "../services/image-url";

interface Props {
  onSelect: (genres: Genres) => void;
  selectedGenre: Genres | null;
}
const GenreList = ({ selectedGenre, onSelect }: Props) => {
  const { data, isLoading } = useGenres();
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              objectFit='cover'
              src={getCroppedImage(genre.image_background)}
            />
            <Button
              whiteSpace="normal"
              textAlign="left"
              fontSize="lg"
              fontWeight={
                selectedGenre?.id === genre.id ? "extrabold" : "normal"
              }
              variant="link"
              onClick={() => onSelect(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
