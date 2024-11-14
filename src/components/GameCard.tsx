import { Game } from "@/hooks/useGames"
import { Card, Image } from "@chakra-ui/react";

interface Props {
    game: Game
}

const GameCard = ({game}: Props) => {
    return (
        <Card.Root>
            <Image src={game.background_image} />
            <Card.Body>
                <Card.Header>{game.name}</Card.Header>
            </Card.Body>
        </Card.Root>
    )
}

export default GameCard;