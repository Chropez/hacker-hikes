import RESTSerializer from 'ember-data/serializers/rest';
import DS from 'ember-data';
import Ember from 'ember';

const { EmbeddedRecordsMixin } = DS;
const { isEmpty } = Ember;

/**
 * RESTSerializer expects data to be used in the following format
  ```
    {
      "posts": [
        {
          "id": 1,
          "title": "I'm Running to Reform the W3C's Tag",
          "author": "Yehuda Katz"
        },
        {
          "id": 2,
          "title": "Rails is omakase",
          "author": "D2H"
        }
      ]
    }
  ```
 */
export default RESTSerializer.extend(EmbeddedRecordsMixin, {

  // Places are always embedded in the path payload
  attrs: {
    places: { embedded: 'always' }
  },

  /**
   * normalizes the payload to be like the RESTSerializer expects it
   */
  normalizeResponse (store, primaryModelClass, payload, id, requestType) {
    if (isEmpty(payload.paths)) return payload;

    payload = { paths: payload.paths };

    // loops over the paths, normalizes the attributes
    // and adds missing Ids
    payload.paths.forEach((path, pathIndex) => {
      let pathId = pathIndex + 1;
      path['id'] = pathId;
      this.removeAttributePrefix('path', path);

      // Polyline returns an array of polylines
      // but only the first one seems to be used
      if (!isEmpty(path.polyline)) {
        path.polyline = path.polyline[0];
      }

      if (isEmpty(path.places)) return;

      path.places.forEach((place, placeIndex) => {
        let placeId = placeIndex + 1;
        place['id'] = `${pathIndex}${placeId}`;
        this.removeAttributePrefix('place', place);
      });
    });

    return this._super(store, primaryModelClass, payload, id, requestType);
  },

  /**
   * Removes model attribute prefixes.
   * ie, the payload returns path_name and
   * our adapter expects only name
   */
  removeAttributePrefix (modelName, modelObject) {
    Object.keys(modelObject).forEach((attr) => {
      if (!attr.startsWith(`${modelName}_`)) {
        return;
      }

      let newAttrName = attr.substr(modelName.length + 1);
      modelObject[newAttrName] = modelObject[attr];
      delete modelObject[attr];
    });
  }
});
