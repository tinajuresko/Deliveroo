// schema.js

import { createSchema } from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import schemaTypeArray from './schemaTypes/index'; // Import the array of schema types

export default createSchema({
  name: 'default',
  types: schemaTypes.concat(schemaTypeArray), // Concatenate schema types array
});
