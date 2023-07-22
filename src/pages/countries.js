import {Select} from '@mantine/core';

export default function Countries() {
    return (
        <Select
            label="Select a country for detailed info"
            placeholder="Pick one"
            data={[
                {value: 'DE', label: 'Germany'},
                {value: 'US', label: 'United States'},
                {value: 'FI', label: 'Finland'},
                {value: 'FR', label: 'France'},
                {value: 'GB', label: 'Great Britain'},
            ]}
        />
    );
}
