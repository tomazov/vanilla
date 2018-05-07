/**
 * @author Stéphane LaFlèche <stephane.l@vanillaforums.com>
 * @copyright 2009-2018 Vanilla Forums Inc.
 * @license GPLv2
 */

import initEmbeds from "./user-content/embeds";
import initSpoilers from "./user-content/spoilers";
import { onReady } from "@core/application";
import { convertToSafeEmojiCharacters } from "@core/dom";

onReady(() => {
    convertToSafeEmojiCharacters(document.body);
    initEmbeds();
    initSpoilers();
});
