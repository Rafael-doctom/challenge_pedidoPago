import Image from 'next/image'

import { Brand, Avatar } from '../../images';


import * as S from './style';

const Navbar = () => {
    return (
        <>
            <S.Content>
                <S.Nav>
                    <Image
                        src={Brand}
                        alt="Picture of Logo"
                    />

                    <S.User>
                        <Image src={Avatar} alt="Picture of User"
                            width={32}
                            height={32}
                        />
                        <S.DetailsUser>
                            <S.Title>Luiz Zlochevsky</S.Title>
                            <S.MyData>
                                meus dados
                            </S.MyData>
                        </S.DetailsUser>

                    </S.User>
                </S.Nav>
            </S.Content>

        </>
    )
}

export default Navbar