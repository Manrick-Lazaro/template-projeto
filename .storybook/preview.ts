import type { Preview } from "@storybook/react";

import "@govbr-ds/core/dist/core.min.css";

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
