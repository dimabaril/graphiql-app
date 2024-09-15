import { FC, FormEvent, useCallback, useEffect, useState } from "react";
import Button from "src/components/Button/Button";
import SdlUrlInput from "src/components/SdlUrlInput/SdlUrlInput";
import SectionTitle from "src/components/SectionTitle/SectionTitle";
import { fetchGraphqlSchema } from "src/fetch/fetchGraphqlSchema";
import { useNotification } from "src/providers/NotificationProvider/NotificationProvider";
import { NotificationType } from "src/providers/NotificationProvider/types";
import { getUrlData } from "src/utils/headersUtils";

const SdlSidebar: FC = () => {
  const [docData, setDocData] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { showNotification } = useNotification();

  const fetchData = useCallback(async (sdlUrl: string): Promise<void> => {
    if (!sdlUrl) {
      return;
    }

    try {
      setIsLoading(true);

      const { status, schema } = await fetchGraphqlSchema(sdlUrl);

      if (status === 200) {
        setDocData(schema);
      } else {
        // show notification error 'Incorrect SDL URL'
      }
    } catch {
      // console.error(error);
      showNotification(NotificationType.Error, "Error", "Server Unavailable");
    } finally {
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const sdlUrl = formData.get("sdlUrl") as string;

    void fetchData(sdlUrl);
  };

  useEffect(() => {
    const { url } = getUrlData();

    void fetchData(url && `${url}?sdl`);
  }, [fetchData]);

  return (
    <div className={`lg:max-w-80 ${isLoading ? "animate-blink" : ""}`}>
      <form onSubmit={handleSubmit} className="flex">
        <SdlUrlInput />
        <Button
          className="bg-primary hover:text-secondary border-0 w-12"
          title="fetch sdl"
        >
          ➤
        </Button>
      </form>
      <SectionTitle>Document Explorer:</SectionTitle>
      <pre className="lg:overflow-y-auto lg:h-sdl-sidebar px-2 py-4">
        {docData ? docData : "No data"}
      </pre>
    </div>
  );
};

export default SdlSidebar;
