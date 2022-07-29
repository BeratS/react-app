import { useState } from 'react';
import { faker } from '@faker-js/faker';
// import { useAutoAnimate } from '@formkit/auto-animate/react';

type ListItem = {
  name: string;
  id: number;
};

function AnimatedList() {
  const [items, setItems] = useState<ListItem[]>([]);

  const appendNewItem = () => {
    setItems((i) => [
      ...i,
      { name: faker.lorem.sentence(), id: Math.random() },
    ]);
  };

//   "@formkit/auto-animate": "*",
//   https://auto-animate.formkit.com/
//   const [listRef] = useAutoAnimate<HTMLDivElement>();

  return (
    <div className="animated-list">
      <button onClick={appendNewItem}>Add Item</button>
      <div className="list" >
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              padding: '0.5rem',
              margin: '0.25rem',
              border: '2px solid black',
              borderRadius: '0.5rem',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            {item.name}
            <button
              onClick={() => {
                setItems((i) => i.filter((c) => c.id !== item.id));
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnimatedList;
