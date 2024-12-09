(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{518:function(e,t,a){"use strict";a.r(t);var r=a(24),s=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"frequently-asked-questions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frequently-asked-questions"}},[e._v("#")]),e._v(" Frequently Asked Questions")]),e._v(" "),t("p",[e._v("The purpose of this document is to help find answers quicker. I am happy to continue the discussion about these issues, so please comment on some of the issues mentioned below or create a new issue if it seems more appropriate.")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#using-json-schema"}},[e._v("Using JSON schema")]),t("ul",[t("li",[t("a",{attrs:{href:"#why-ajv-validates-empty-object-as-valid"}},[e._v("Why Ajv validates empty object as valid?")])]),t("li",[t("a",{attrs:{href:"#why-ajv-validates-only-the-first-item-of-the-array"}},[e._v("Why Ajv validates only the first item of the array?")])])])]),t("li",[t("a",{attrs:{href:"#ajv-api-for-returning-validation-errors"}},[e._v("Ajv API for returning validation errors")]),t("ul",[t("li",[t("a",{attrs:{href:"#why-ajv-assigns-errors-as-a-property-of-validation-function-or-instance-instead-of-returning-an-object-with-validation-results-and-errors"}},[e._v("Why Ajv assigns errors as a property of validation function (or instance) instead of returning an object with validation results and errors?")])]),t("li",[t("a",{attrs:{href:"#would-errors-get-overwritten-in-case-of-concurrent-validations"}},[e._v('Would errors get overwritten in case of "concurrent" validations?')])]),t("li",[t("a",{attrs:{href:"#can-we-change-extend-api-to-add-a-method-that-would-return-errors-rather-than-assign-them-to-errors-property"}},[e._v("Can we change / extend API to add a method that would return errors (rather than assign them to errors property)?")])]),t("li",[t("a",{attrs:{href:"#why-don-t-additionalproperties-false-errors-display-the-property-name"}},[e._v('Why don\'t "additionalProperties": false errors display the property name?')])])])]),t("li",[t("a",{attrs:{href:"#additional-properties-inside-compound-keywords-anyof-oneof-etc"}},[e._v("Additional properties inside compound keywords anyOf, oneOf, etc.")]),t("ul",[t("li",[t("a",{attrs:{href:"#why-the-keyword-additionalproperties-false-fails-validation-when-some-properties-are-declared-inside-a-subschema-in-anyof-etc"}},[e._v('Why the keyword additionalProperties: false fails validation when some properties are "declared" inside a subschema in anyOf/etc.?')])]),t("li",[t("a",{attrs:{href:"#why-the-validation-fails-when-i-use-option-removeadditional-with-the-keyword-anyof-etc"}},[e._v("Why the validation fails when I use option removeAdditional with the keyword anyOf/etc.?")])])])]),t("li",[t("a",{attrs:{href:"#generating-schemas-with-resolved-references-ref"}},[e._v("Generating schemas with resolved references ($ref)")]),t("ul",[t("li",[t("a",{attrs:{href:"#why-ajv-does-not-replace-references-ref-with-the-actual-referenced-schemas-as-some-validators-do"}},[e._v("Why Ajv does not replace references ($ref) with the actual referenced schemas as some validators do?")])]),t("li",[t("a",{attrs:{href:"#how-can-i-generate-a-schema-where-ref-keywords-are-replaced-with-referenced-schemas"}},[e._v("How can I generate a schema where $ref keywords are replaced with referenced schemas?")])])])])])]),t("p"),e._v(" "),t("h2",{attrs:{id:"using-json-schema"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-json-schema"}},[e._v("#")]),e._v(" Using JSON schema")]),e._v(" "),t("p",[e._v("Ajv implements JSON schema specification. Before submitting the issue about the behaviour of any validation keywords please review them in:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://tools.ietf.org/html/draft-handrews-json-schema-validation-00",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSON Schema specification"),t("OutboundLink")],1),e._v(" (draft-07)")]),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/json-schema.html"}},[e._v("JSON Schema reference")]),e._v(" in Ajv documentation")],1),e._v(" "),t("li",[t("a",{attrs:{href:"https://spacetelescope.github.io/understanding-json-schema/",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSON Schema tutorial"),t("OutboundLink")],1),e._v(" (for draft-04)")])]),e._v(" "),t("h4",{attrs:{id:"why-ajv-validates-empty-object-as-valid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#why-ajv-validates-empty-object-as-valid"}},[e._v("#")]),e._v(" Why Ajv validates empty object as valid?")]),e._v(" "),t("p",[e._v('"properties" keyword does not require the presence of any properties, you need to use "required" keyword. It also doesn\'t require that the data is an object, so any other type of data will also be valid. To require a specific type use "type" keyword. '),t("RouterLink",{attrs:{to:"/strict-mode.html#strict-types"}},[e._v("Strict types mode")]),e._v(' introduced in v7 requires presence of "type" when "properties" are used, so the mistakes are less likely.')],1),e._v(" "),t("h4",{attrs:{id:"why-ajv-validates-only-the-first-item-of-the-array"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#why-ajv-validates-only-the-first-item-of-the-array"}},[e._v("#")]),e._v(" Why Ajv validates only the first item of the array?")]),e._v(" "),t("p",[e._v('"items" keyword support '),t("RouterLink",{attrs:{to:"/json-schema.html#items"}},[e._v("two syntaxes")]),e._v(" - 1) when the schema applies to all items; 2) when there is a different schema for each item in the beginning of the array. This problem means you are using the second syntax.")],1),e._v(" "),t("p",[e._v("In v7 with option "),t("code",[e._v("strictTuples")]),e._v(" ("),t("code",[e._v('"log"')]),e._v(' by default) this problem is less likely to happen, as Ajv would log warning about missing "minItems" and other keywords that are required to constrain tuple size.')]),e._v(" "),t("h2",{attrs:{id:"ajv-api-for-returning-validation-errors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ajv-api-for-returning-validation-errors"}},[e._v("#")]),e._v(" Ajv API for returning validation errors")]),e._v(" "),t("p",[e._v("See "),t("a",{attrs:{href:"https://github.com/ajv-validator/ajv/issues/65",target:"_blank",rel:"noopener noreferrer"}},[e._v("#65"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://github.com/ajv-validator/ajv/issues/212",target:"_blank",rel:"noopener noreferrer"}},[e._v("#212"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://github.com/ajv-validator/ajv/issues/236",target:"_blank",rel:"noopener noreferrer"}},[e._v("#236"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://github.com/ajv-validator/ajv/issues/242",target:"_blank",rel:"noopener noreferrer"}},[e._v("#242"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://github.com/ajv-validator/ajv/issues/256",target:"_blank",rel:"noopener noreferrer"}},[e._v("#256"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h4",{attrs:{id:"why-ajv-assigns-errors-as-a-property-of-validation-function-or-instance-instead-of-returning-an-object-with-validation-results-and-errors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#why-ajv-assigns-errors-as-a-property-of-validation-function-or-instance-instead-of-returning-an-object-with-validation-results-and-errors"}},[e._v("#")]),e._v(" Why Ajv assigns errors as a property of validation function (or instance) instead of returning an object with validation results and errors?")]),e._v(" "),t("p",[e._v("The reasons are history (other fast validators with the same api) and performance (returning boolean is faster). Although more code is written to process errors than to handle successful results, almost all server-side validations pass. The existing API is more efficient from the performance point of view.")]),e._v(" "),t("p",[e._v("Ajv also supports asynchronous validation (with asynchronous formats and keywords) that returns a promise that either resolves to "),t("code",[e._v("true")]),e._v(" or rejects with an error.")]),e._v(" "),t("h4",{attrs:{id:"would-errors-get-overwritten-in-case-of-concurrent-validations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#would-errors-get-overwritten-in-case-of-concurrent-validations"}},[e._v("#")]),e._v(' Would errors get overwritten in case of "concurrent" validations?')]),e._v(" "),t("p",[e._v("No. There is no parallel execution in JavaScript, and the cooperative concurrency model of javascript makes this pattern safe. While a validation is run, no other JavaScript code that can access the same memory can be executed. As long as the errors are used in the same execution block, the errors will not be overwritten.")]),e._v(" "),t("h4",{attrs:{id:"can-we-change-extend-api-to-add-a-method-that-would-return-errors-rather-than-assign-them-to-errors-property"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#can-we-change-extend-api-to-add-a-method-that-would-return-errors-rather-than-assign-them-to-errors-property"}},[e._v("#")]),e._v(" Can we change / extend API to add a method that would return errors (rather than assign them to "),t("code",[e._v("errors")]),e._v(" property)?")]),e._v(" "),t("p",[e._v("No. In many cases there is a module responsible for the validation in the application, usually to load schemas and to process errors. This module is the right place to introduce any user-defined API. Convenience is a subjective thing, changing or extending API purely because of convenience would either break backward compatibility (even if it's done in a new major version it still complicates migration) or bloat API (making it more difficult to maintain).")]),e._v(" "),t("h4",{attrs:{id:"why-don-t-additionalproperties-false-errors-display-the-property-name"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#why-don-t-additionalproperties-false-errors-display-the-property-name"}},[e._v("#")]),e._v(" Why don't "),t("code",[e._v('"additionalProperties": false')]),e._v(" errors display the property name?")]),e._v(" "),t("p",[e._v("Doing this would create a precedent where validated data is used in error messages, creating a vulnerability (e.g., when ajv is used to validate API data/parameters and error messages are logged).")]),e._v(" "),t("p",[e._v("Since the property name is already in the params object, in an application you can modify the messages in any way you need. ajv-errors package allows modifying messages as well.")]),e._v(" "),t("h2",{attrs:{id:"additional-properties-inside-compound-keywords-anyof-oneof-etc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#additional-properties-inside-compound-keywords-anyof-oneof-etc"}},[e._v("#")]),e._v(" Additional properties inside compound keywords anyOf, oneOf, etc.")]),e._v(" "),t("p",[e._v("See "),t("a",{attrs:{href:"https://github.com/ajv-validator/ajv/issues/127",target:"_blank",rel:"noopener noreferrer"}},[e._v("#127"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://github.com/ajv-validator/ajv/issues/129",target:"_blank",rel:"noopener noreferrer"}},[e._v("#129"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://github.com/ajv-validator/ajv/issues/134",target:"_blank",rel:"noopener noreferrer"}},[e._v("#134"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://github.com/ajv-validator/ajv/issues/140",target:"_blank",rel:"noopener noreferrer"}},[e._v("#140"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://github.com/ajv-validator/ajv/issues/193",target:"_blank",rel:"noopener noreferrer"}},[e._v("#193"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://github.com/ajv-validator/ajv/issues/205",target:"_blank",rel:"noopener noreferrer"}},[e._v("#205"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://github.com/ajv-validator/ajv/issues/238",target:"_blank",rel:"noopener noreferrer"}},[e._v("#238"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://github.com/ajv-validator/ajv/issues/264",target:"_blank",rel:"noopener noreferrer"}},[e._v("#264"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h4",{attrs:{id:"why-the-keyword-additionalproperties-false-fails-validation-when-some-properties-are-declared-inside-a-subschema-in-anyof-etc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#why-the-keyword-additionalproperties-false-fails-validation-when-some-properties-are-declared-inside-a-subschema-in-anyof-etc"}},[e._v("#")]),e._v(" Why the keyword "),t("code",[e._v("additionalProperties: false")]),e._v(' fails validation when some properties are "declared" inside a subschema in '),t("code",[e._v("anyOf")]),e._v("/etc.?")]),e._v(" "),t("p",[e._v("The keyword "),t("code",[e._v("additionalProperties")]),e._v(" creates the restriction on validated data based on its own value ("),t("code",[e._v("false")]),e._v(" or schema object) and on the keywords "),t("code",[e._v("properties")]),e._v(" and "),t("code",[e._v("patternProperties")]),e._v(" in the SAME schema object. JSON Schema validators must NOT take into account properties used in other schema objects.")]),e._v(" "),t("p",[e._v("While you can expect that the schema below would allow the objects either with properties "),t("code",[e._v("foo")]),e._v(" and "),t("code",[e._v("bar")]),e._v(" or with properties "),t("code",[e._v("foo")]),e._v(" and "),t("code",[e._v("baz")]),e._v(" and all other properties will be prohibited, this schema will only allow objects with one property "),t("code",[e._v("foo")]),e._v(" (an empty object and any non-objects will also be valid):")]),e._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"object"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("properties")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("foo")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"number"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("additionalProperties")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("oneOf")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("properties")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("bar")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"number"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("properties")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("baz")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"number"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[e._v("The reason for that is that "),t("code",[e._v("additionalProperties")]),e._v(" keyword ignores properties inside "),t("code",[e._v("oneOf")]),e._v(" keyword subschemas. That's not the limitation of Ajv or any other validator, that's how it must work according to the standard.")]),e._v(" "),t("p",[e._v("There are several ways to implement the described logic that would allow two properties, please see the suggestions in the issues mentioned above.")]),e._v(" "),t("h4",{attrs:{id:"why-the-validation-fails-when-i-use-option-removeadditional-with-the-keyword-anyof-etc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#why-the-validation-fails-when-i-use-option-removeadditional-with-the-keyword-anyof-etc"}},[e._v("#")]),e._v(" Why the validation fails when I use option "),t("code",[e._v("removeAdditional")]),e._v(" with the keyword "),t("code",[e._v("anyOf")]),e._v("/etc.?")]),e._v(" "),t("p",[e._v("This problem is related to the problem explained above - properties treated as additional in the sense of "),t("code",[e._v("additionalProperties")]),e._v(" keyword, based on "),t("code",[e._v("properties")]),e._v("/"),t("code",[e._v("patternProperties")]),e._v(" keyword in the same schema object.")]),e._v(" "),t("p",[e._v("See the example in the "),t("a",{attrs:{href:"https://ajv.js.org/guide/modifying-data.html#removing-additional-properties",target:"_blank",rel:"noopener noreferrer"}},[e._v("Removing Additional Data"),t("OutboundLink")],1),e._v(" section of the docs.")]),e._v(" "),t("h2",{attrs:{id:"generating-schemas-with-resolved-references-ref"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#generating-schemas-with-resolved-references-ref"}},[e._v("#")]),e._v(" Generating schemas with resolved references ($ref)")]),e._v(" "),t("p",[e._v("See "),t("a",{attrs:{href:"https://github.com/ajv-validator/ajv/issues/22",target:"_blank",rel:"noopener noreferrer"}},[e._v("#22"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://github.com/ajv-validator/ajv/issues/125",target:"_blank",rel:"noopener noreferrer"}},[e._v("#125"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://github.com/ajv-validator/ajv/issues/146",target:"_blank",rel:"noopener noreferrer"}},[e._v("#146"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://github.com/ajv-validator/ajv/issues/228",target:"_blank",rel:"noopener noreferrer"}},[e._v("#228"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://github.com/ajv-validator/ajv/issues/336",target:"_blank",rel:"noopener noreferrer"}},[e._v("#336"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://github.com/ajv-validator/ajv/issues/454",target:"_blank",rel:"noopener noreferrer"}},[e._v("#454"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h4",{attrs:{id:"why-ajv-does-not-replace-references-ref-with-the-actual-referenced-schemas-as-some-validators-do"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#why-ajv-does-not-replace-references-ref-with-the-actual-referenced-schemas-as-some-validators-do"}},[e._v("#")]),e._v(" Why Ajv does not replace references ($ref) with the actual referenced schemas as some validators do?")]),e._v(" "),t("ol",[t("li",[e._v("The scope of Ajv is validating data against JSON Schemas; inlining referenced schemas is not necessary for validation. When Ajv generates code for validation it either inlines the code of referenced schema or uses function calls. Doing schema manipulation is more complex and out of scope.")]),e._v(" "),t("li",[e._v("When schemas are recursive (or mutually recursive) resolving references would result in self-referencing recursive data-structures that can be difficult to process.")]),e._v(" "),t("li",[e._v("There are cases when such inlining would also require adding (or modifying) "),t("code",[e._v("id")]),e._v(" attribute in the inlined schema fragment to make the resulting schema equivalent.")])]),e._v(" "),t("p",[e._v("There were many conversations about the meaning of "),t("code",[e._v("$ref")]),e._v(" in "),t("a",{attrs:{href:"https://github.com/json-schema-org",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSON Schema GitHub organisation"),t("OutboundLink")],1),e._v(". The consensus is that while it is possible to treat "),t("code",[e._v("$ref")]),e._v(" as schema inclusion with two caveats (above), this interpretation is unnecessary complex. A more efficient approach is to treat "),t("code",[e._v("$ref")]),e._v(" as a delegation, i.e. a special keyword that validates the current data instance against the referenced schema. The analogy with programming languages is that "),t("code",[e._v("$ref")]),e._v(" is a function call rather than a macro. See "),t("a",{attrs:{href:"https://github.com/json-schema-org/json-schema-spec/issues/279",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(", for example.")]),e._v(" "),t("h4",{attrs:{id:"how-can-i-generate-a-schema-where-ref-keywords-are-replaced-with-referenced-schemas"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-can-i-generate-a-schema-where-ref-keywords-are-replaced-with-referenced-schemas"}},[e._v("#")]),e._v(" How can I generate a schema where "),t("code",[e._v("$ref")]),e._v(" keywords are replaced with referenced schemas?")]),e._v(" "),t("p",[e._v("There are two possible approaches:")]),e._v(" "),t("ol",[t("li",[e._v("Traverse schema (e.g. with json-schema-traverse) and replace every "),t("code",[e._v("$ref")]),e._v(" with the referenced schema.")]),e._v(" "),t("li",[e._v("Use a specially constructed JSON Schema with a "),t("RouterLink",{attrs:{to:"/keywords.html"}},[e._v("user-defined keyword")]),e._v(" to traverse and modify your schema.")],1)])])}),[],!1,null,null,null);t.default=s.exports}}]);