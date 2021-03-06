import {useWeb3React} from '@web3-react/core'
import FlexLayout from 'components/Layout/Flex'
import Page from 'components/Layout/Page'
import PageHeader from 'components/PageHeader'
import {useTranslation} from 'contexts/Localization'
import React from 'react'
import {useLocation} from 'react-router-dom'
import styled from 'styled-components'
import {Heading} from 'uikit'

const CardLayout = styled(FlexLayout)`
  justify-content: center;
  text-align: center;
`
const Invest: React.FC = () => {
    const location = useLocation()
    const {t} = useTranslation()
    const {account} = useWeb3React()
    return (
        <>
            <PageHeader>
                <Heading as="h1" scale="xxl" color="secondary" mb="24px">
                    {t('Mushu Invest')}
                </Heading>
                <Heading scale="md" color="text">
                    {t(
                        ` Mushu Invest would provide a decentralized platform for potential projects that will be determined by the Mushu ecosystem's investors.`,
                    )}
                </Heading>
            </PageHeader>
            <Page>
                <CardLayout>
                    <Heading scale="xl" color="text">
                        {t(`Comming soon...`)}
                    </Heading>
                </CardLayout>
            </Page>
        </>
    )
}

export default Invest
