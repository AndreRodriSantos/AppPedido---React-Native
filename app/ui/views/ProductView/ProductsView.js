import React from "react";
import { ScrollView } from "react-native";
import { Appbar, Button, Card, Paragraph } from "react-native-paper";
import styled from "styled-components/native";


const ViewContainer = styled.SafeAreaView`
flex: 1;
`

const ProductCard = styled(Card)`
margin: 10px;
`


export default function ProductsView(props) {
    return (
        <ViewContainer>

            <Appbar.Header>
                <Appbar.Content title={"Produtos"}></Appbar.Content>
            </Appbar.Header>
            <ProductCard>
                <ScrollView>

                    <Card>
                        <Card.Cover source={{ uri: 'https://www.sabornamesa.com.br/media/k2/items/cache/1397be472e45feda66c2cb00ba5f4ce2_XL.jpg' }} />
                        <Card.Title
                            title={'Feijão'}
                            right={(props) =>
                                <Button>Selecionar</Button>}
                        />

                        <Card.Content>
                            <Paragraph>R$ 10,00</Paragraph>
                        </Card.Content>


                    </Card>

                    <Card>
                        <Card.Cover source={{ uri: 'https://www.remedio-caseiro.com/wp-content/uploads/2014/02/20190923-laranjas-1200x675.jpg' }} />
                        <Card.Title
                            title={'Laranja'}
                            right={(props) =>
                                <Button>Selecionar</Button>}
                        />

                        <Card.Content>
                            <Paragraph>R$ 12,00</Paragraph>
                        </Card.Content>


                    </Card>

                    <Card>
                        <Card.Cover source={{ uri: 'https://s2.glbimg.com/JAZaJrRJpVfXRP1BZwbAsUcuYLw=/0x0:1280x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/R/X/Lj3rwSQpm7BgzSEvJ1Mw/macarrao-simples-como-fazer.jpg' }} />
                        <Card.Title
                            title={'Macarrão'}
                            right={(props) =>
                                <Button>Selecionar</Button>}
                        />

                        <Card.Content>
                            <Paragraph>R$ 8,00</Paragraph>
                        </Card.Content>


                    </Card>

                </ScrollView>

            </ProductCard>

        </ViewContainer>
    )
}