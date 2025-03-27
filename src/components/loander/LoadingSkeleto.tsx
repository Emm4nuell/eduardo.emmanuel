import { Skeleton } from "@mui/material";

export default function LoadingPerfil() {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
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
    </div>
  );
}
