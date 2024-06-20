import CollectionLeft from './components/CollectionLeft';
import CollectionRight from './components/CollectionRight';

function CollectionDefault() {
  return (
    <div className="grid grid-cols-2 mb-9">
      <CollectionLeft />
      <CollectionRight />
    </div>
  );
}

export default CollectionDefault;
