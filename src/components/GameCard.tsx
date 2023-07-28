import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames"
import PlatformIcons from "./PlatformIcons";
import CriticScore from "./CriticScore";
import getCroppedImage from "../services/image-url";

interface Props{
    game: Game;
}

const GameCard = ({game}: Props) => {
  return (
    <Card >
        <Image src = {getCroppedImage( game.background_image)} />
        <CardBody>
            
            <HStack justifyContent='space-between' marginBottom={2}>
                <PlatformIcons platforms={game.parent_platforms.map(p => p.platform)}/>
                <CriticScore score={game.metacritic}/>
            </HStack>
            <Heading fontSize='2xl'>
                {game.name}
            </Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard