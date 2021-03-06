import React from 'react'
import {AutoRenewIcon, Button, Skeleton} from 'uikit'
import {useTranslation} from 'contexts/Localization'
import {useERC20} from 'hooks/useContract'
import {getAddress} from 'utils/addressHelpers'
import {Pool} from 'state/types'
import {useApprovePool} from '../../../hooks/useApprove'

interface ApprovalActionProps {
    pool: Pool
    isLoading?: boolean
}

const ApprovalAction: React.FC<ApprovalActionProps> = ({pool, isLoading = false}) => {
    const {sousId, stakingToken, earningToken} = pool
    const {t} = useTranslation()
    const stakingTokenContract = useERC20(stakingToken.address ? getAddress(stakingToken.address) : '')
    const {handleApprove, requestedApproval} = useApprovePool(stakingTokenContract, sousId, earningToken.symbol)

    return (
        <>
            {isLoading ? (
                <Skeleton width="100%" height="52px"/>
            ) : (
                <Button
                    isLoading={requestedApproval}
                    endIcon={requestedApproval ? <AutoRenewIcon spin color="currentColor"/> : null}
                    disabled={requestedApproval}
                    onClick={handleApprove}
                    width="100%"
                    className="bg-img"
                >
                    {t('Enable')}
                </Button>
            )}
        </>
    )
}

export default ApprovalAction
