import arrayMin from './min';
import arrayMax from './max';

export default ({ data, limit, width = 1, height = 1, margin = 0, max = arrayMax(data.map(d=>d[1])), min = arrayMin(data.map(d=>d[1])) }) => {

    const len = data.length;
    if (limit && limit < len) {
        data = data.slice(len - limit);
    }
    const xmi = data[0][0];
    const xma = data[data.length - 1][0];
    const vfactor = (height - margin * 2) / ((max - min) || 2);
    const hfactor = (width - margin * 2) / ( xma - xmi);

    return data.map((d, i) => ({
        x: (d[0] - xmi) * hfactor + margin ,
        y: (max === min ? 1 : (max - d[1])) * vfactor + margin
    }));
};
