import { Skeleton } from "@mui/material";

export function LoadingPerfil() {
  return (
    <>
      <Skeleton
        variant="circular"
        width={130}
        height={130}
        sx={{ backgroundColor: "#bdbdbd" }}
      />
      <Skeleton
        variant="rounded"
        width={300}
        height={30}
        sx={{ backgroundColor: "#bdbdbd" }}
      />
      <Skeleton
        variant="rounded"
        width={210}
        height={10}
        sx={{ backgroundColor: "#bdbdbd" }}
      />
    </>
  );
}

export function LoadingCardProject() {
  return (
    <div className="flex flex-col gap-5 p-5">
      <Skeleton
        variant="rounded"
        width={"50%"}
        height={10}
        sx={{ backgroundColor: "#bdbdbd" }}
      />
      <Skeleton
        variant="rounded"
        width={"100%"}
        height={200}
        sx={{ backgroundColor: "#bdbdbd" }}
      />
    </div>
  );
}
