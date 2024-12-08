import { open } from '@tauri-apps/plugin-shell';
import { invoke } from '@tauri-apps/api/core';
import { listen } from "@tauri-apps/api/event";


import { useEnvironmentStore } from '@mee/web/src/entities/environment/index'
import { success } from '@mee/routes/auth/success';

// export const startOAuthFlow = async (authUrl: string) => {
//   let port: number | undefined

//   try {
//     port = await start()
//     console.log(`OAuth server started on port ${port}`)

//     await onUrl((url) => {
//       console.log('Received OAuth URL:', url)

//       const token = new URL(url).searchParams.get('jwtUser')
//       if (token) {
//         useEnvironmentStore.setState((state) => {
//           state.oauth.jwtToken = token
//         })
//       }
//     })

//     window.open(authUrl, '_blank')
//   } catch (error) {
//     console.error('Error starting OAuth server:', error)
//   }
//   // finally {
//   //   port && (await cancel(port))
//   //   console.log('OAuth server stopped')
//   // }
// }

export const startOAuthFlow = async (authUrl: string) => {
  try {
    // Запускаем сервер OAuth
    const port = await invoke<number>("start_server");

    if (!port) {
      throw new Error("Failed to start OAuth server");
    }

    // const redirectUrl = `http://localhost:${port}`;
    // const authRequestUrl = `${authUrl}&redirect_uri=${encodeURIComponent(redirectUrl)}`;
    const authRequestUrl = `${authUrl}`;

    // Слушаем событие завершения OAuth
    const unlisten = await listen("redirect_uri", (event) => {
      const url = new URL(event.payload as string);
      const token = url.searchParams.get("jwtUser");

      token && success(token)
      // if (token) {
      //   // Сохраняем токен в Zustand
      //   useEnvironmentStore.setState((state) => {
      //     state.oauth.jwtToken = token;
      //   });
      //   console.log("Token saved:", token);
      // }

      unlisten();
    });

    // Открываем OAuth URL в браузере
    await open(authRequestUrl);
  } catch (error) {
    console.error("OAuth flow failed:", error);
    throw error;
  }
};

// export const startOAuthFlow = async (authUrl: string) => {
//   try {
//     // Запуск OAuth сервера и получение порта
//     const port: number = await invoke("plugin:oauth|start");
//     console.log(`OAuth server started on port ${port}`);

//     // Формируем redirect_uri для OAuth
//     const redirectUri = `http://localhost:${port}`;

//     // Открываем страницу авторизации в браузере
//     open(`${authUrl}`); //?redirect_uri=${encodeURIComponent(redirectUri)}

//     // Обрабатываем URL, когда OAuth сервер перехватывает запрос
//     const url = await invoke<string>("plugin:oauth|onUrl");
//     console.log("Received OAuth URL:", url);

//     // Извлекаем `jwtUser` из полученного URL
//     const jwtUser = new URL(url).searchParams.get("jwtUser");
//     if (!jwtUser) {
//       throw new Error("JWT token not found in the redirect URL");
//     }

//     // Сохраняем токен в Zustand
//     // useEnvironmentStore.setState((state) => {
//     //   state.oauth.jwtToken = jwtUser;
//     // });
//     success(jwtUser);

//     // (Опционально) сохраняем токен в куки
//     // Cookies.set("jwtUser", jwtUser, { expires: 7 }); // Хранить 7 дней

//     // Закрываем сервер
//     await invoke("plugin:oauth|cancel", { port });
//   } catch (error) {
//     console.error("Error in OAuth flow:", error);
//   }
// };