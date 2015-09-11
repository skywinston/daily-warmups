##### What are the two fundamental characteristics of Objects?

1. State
2. Behavior

##### What are the benefits of using a constructor vs Object.create?

Using a constructor lets you encapsulate functionality and create what, in essence, is a private property of the 'class'.  

Using `Object.create` will not inherit from the `Prototype` object itself, as any other constructor would, but instead would inherit from the object that you passed as the argument when creating it.
