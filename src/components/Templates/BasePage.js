import Head from 'next/head';


import styled from 'styled-components';
import Navbar from '../Molecules/navbar';

const Container = styled.div`
    background:gray;
`;

const BasePage = (props) => {
    return (
        <>
            <Head>
                <title>{props.Title}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="../assets/images/brand.svg" />
            </Head>
            <Container>
                <Navbar />
                <div>
                    {props.children}
                </div>
            </Container>
        </>
    )
}

export default BasePage;