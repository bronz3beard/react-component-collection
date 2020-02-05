```js
  <>
    {items.map((item) => (
        <BasicCard>
          <Element item={item} />
        </BasicCard>
      ))
    }
  </>

  <BasicCard>
    {new Date().toLocaleDateString()}
  </BasicCard>
```
This is a basic card element to hold other elements and jsx elements and display in a grid it will displa the grid when it is mapped, otherwise it will just display one item in a card.
