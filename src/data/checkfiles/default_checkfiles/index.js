import checkZmtVersion from './check-zmt-version.js';
import compoundRescChildren from './compound-resc-children.js';
import unixfilesystemRescSpace from './unixfilesystem-resc-space.js';
import unusedMetadata from './unused-metadata.js';
import validateCoordRescChildren from './validate-coord-resc-children.js';
import validatePassthruChildren from './validate-passthru-children.js';
import validateRescChars from './validate-resc-chars.js';
import validateRescHostname from './validate-resc-hostname.js';
import validateRescNameLength from './validate-resc-name-length.js';
import validateStorageRescChildren from './validate-storage-resc-children.js';
import validateUserZone from './validate-user-zone.js';

export const defaultChecks = [
    checkZmtVersion,
    compoundRescChildren,
    unixfilesystemRescSpace,
    unusedMetadata,
    validateCoordRescChildren,
    validatePassthruChildren,
    validateRescChars,
    validateRescHostname,
    validateRescNameLength,
    validateStorageRescChildren,
    validateUserZone
];
