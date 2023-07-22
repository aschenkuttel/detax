import {Select} from '@mantine/core';

export default function Countries() {
    return (
        <Select
            label="Your favorite framework/library"
            placeholder="Pick one"
            data={[
                {value: 'react', label: 'React'},
                {value: 'ng', label: 'Angular'},
                {value: 'svelte', label: 'Svelte'},
                {value: 'vue', label: 'Vue'},
            ]}
        />
    );
}
