import { Dna } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div style={{ position: 'fixed', top: '80%', left: '50%' }}>
      {' '}
      <Dna
        visible={true}
        height="100"
        width="100"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};
