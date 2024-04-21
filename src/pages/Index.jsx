// Complete the Index page component here
// Use chakra-ui
import { Box, Flex, Grid, Text, Button } from "@chakra-ui/react";
import { FaChessKing, FaChessQueen, FaChessRook, FaChessBishop, FaChessKnight, FaChessPawn } from "react-icons/fa";

const boardInitial = [
  ["r", "n", "b", "q", "k", "b", "n", "r"],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
];

const pieceIcons = {
  k: <FaChessKing color="black" />,
  q: <FaChessQueen color="black" />,
  r: <FaChessRook color="black" />,
  b: <FaChessBishop color="black" />,
  n: <FaChessKnight color="black" />,
  p: <FaChessPawn color="black" />,
  K: <FaChessKing color="white" />,
  Q: <FaChessQueen color="white" />,
  R: <FaChessRook color="white" />,
  B: <FaChessBishop color="white" />,
  N: <FaChessKnight color="white" />,
  P: <FaChessPawn color="white" />,
  ".": null,
};

const Index = () => {
  const renderPiece = (piece) => {
    return pieceIcons[piece] || null;
  };

  return (
    <Box w="100vw" h="100vh" p={4} bg="gray.100">
      <Flex justify="center" align="center" h="full">
        <Grid templateColumns="repeat(8, 1fr)" gap={1} w="650px" h="650px" bg="white">
          {boardInitial.flat().map((piece, index) => (
            <Flex key={index} justify="center" align="center" w="100%" h="100%" bg={(Math.floor(index / 8) + (index % 8)) % 2 === 0 ? "gray.300" : "gray.500"}>
              {renderPiece(piece)}
            </Flex>
          ))}
        </Grid>
      </Flex>
    </Box>
  );
};

export default Index;
