const bufferFromString = (str, size, variant = 'hex') => {
    if (size) {
        let padding = Math.abs(+size - str.length / 2);
        str += Array(padding)
            .fill()
            .map(() => '00')
            .join('');
    }
    return new Buffer(str, variant);
};
const bind = (Parser, size) => ({
    newParser(binaryStr) {
        return new Parser(mockStreamFromString(binaryStr, { size }));
    },
    parseHeader(field, binaryStr) {
        return new Parser(bufferFromString(binaryStr, size)).parse()[field];
    },
});

const newPadding = count =>
    Array(count * 2)
        .fill('0')
        .join('');

const hammingWeight = num => {
    num = num - ((num >> 1) & 0x55555555);
    num = (num & 0x33333333) + ((num >> 2) & 0x33333333);
    return (((num + (num >> 4)) & 0xf0f0f0f) * 0x1010101) >> 24;
};

const btoh = binary => {
    const str = binary.toString(16);
    return str.length % 2 !== 0 ? '0' + str : str;
};

module.exports = {
    btoh,
    hammingWeight,
    newPadding,
    bind,
    bufferFromString,
};
