const unitConverter =
    units =>
        factor =>
            offset =>
                input =>
                    `${(input - offset) * factor}${units}`;


export default unitConverter;