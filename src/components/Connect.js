import { useContext } from 'react'
import { Button } from '@mantine/core'
import { Context } from '@/components/Context'

export default function ConnectButton() {
    const {address, connect} = useContext(Context)
    let content = 'Connect'

    if (address) {
        content = address.substring(0, 6) + '...' + address.substring(address.length - 4)
    }

    return (
        <Button w={166} onClick={connect}>
            {content}
        </Button>
    )
}