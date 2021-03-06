/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

module.exports = {
  /** @const {string} header that carries trace context across Google infrastructure. */
  TRACE_CONTEXT_HEADER_NAME: 'X-Cloud-Trace-Context',

  /** @const {string} header that is used to identify outgoing http made by the agent. */
  TRACE_AGENT_REQUEST_HEADER: 'X-Cloud-Trace-Agent-Request'
};
