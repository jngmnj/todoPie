import React from "react";
import useFetch from "@/hooks/useFetch";

const Advice = () => {
  const [advice, isLoading] = useFetch(
    "https://korean-advice-open-api.vercel.app/api/advice"
  );

  return (
    <div className="item">
      {!isLoading && (
        <div className="advice">
          <div>{advice.message}</div>
          <div>-{advice.author}-</div>
        </div>
      )}
    </div>
  );
};

export default Advice;
