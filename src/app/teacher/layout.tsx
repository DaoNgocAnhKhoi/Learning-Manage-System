import React from 'react';

export default function ComponentName({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>Teacher layout</h1>
      <div>{children}</div>  {/* Nội dung của các trang con sẽ được render tại đây */}
    </div>
  );
}