/**
 * converts an input into any type of units
 * @param units
 */
const unitConverter =
    units =>
        factor =>
            offset =>
                input =>
                    `${(input - offset) * factor}${units}`;


export default unitConverter;