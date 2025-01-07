import { Box, Card, CardBody, Grid, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";


const HighlightCard = () => {
    const highlights = [
        { title: "Skater Boys", description: "The best states of skaters." },
        { title: "Yoga Forces", description: "Welcome to the biggest yoga group." },
        { title: "Real Wild Cyclist", description: "We are the wildest cyclist." },
    ];
    return (
        <Box pl="40px" pr="40px" display="flex" justifyContent="space-between" backgroundColor="#f7fafc">
        <Grid templateColumns="repeat(3, 1fr)" gap="21px" textAlign="center">
            {highlights.map((highlight, index) => (
                <Card W='226px' key={index} >
                    <CardBody p={0}>
                        <Image
                            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                            w="100%"
                            h="205px"
                        />
                        <Stack mt='20px' spacing='3' mb="24px">
                            <Text mb="10px" fontWeight="900px" size="16px" lineHeight="21.86px" >{highlight.title}</Text>
                            <Text mb="10px" fontWeight="400px" size="14px" lineHeight="19.12px">
                                {highlight.description}
                            </Text>
                        </Stack>
                    </CardBody>
                    {/* <Divider /> */}
                </Card>
            ))}

        </Grid>
        </Box>
    );
};

export default HighlightCard;
