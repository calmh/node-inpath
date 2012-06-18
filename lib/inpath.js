var path = require('path');

exports = module.exports = {
    sync: inpathSync
};

function inpathSync(target, dirs) {
    var i, l, pos;

    if (!dirs) {
        dirs = process.env['PATH'].split(':');
    }

    for (i = 0, l = dirs.length; i < l; i++) {
        pos = path.join(dirs[i], target)
        if (path.existsSync(pos)) {
            return pos;
        }
    }

    return null;
};
