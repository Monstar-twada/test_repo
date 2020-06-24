<template>
  <div class="chatContainer">
    <h2 class="chatContainer__title">メッセージボックス</h2>
    <div ref="chatBody" class="chatContainer__body">
      <div
        v-for="(msg, i) in messages"
        :key="`msg-${i}`"
        class="chatContainer__body__messages"
      >
        <div
          v-if="msg.target === 'charge'"
          class="chatContainer__body__messages--left"
        >
          <div class="message__context">
            <span v-if="editing !== i">{{ msg.text }}</span>
            <input
              v-else
              v-model="msg.text"
              type="text"
              class="message__context__input"
            />
            <div class="message__context__edit">
              <v-img
                :max-width="30"
                :max-height="30"
                :src="require(`~/static/matter/pancel_icon.svg`)"
                class="message__context__edit__btns--remake"
                @click="editMessage(i)"
              ></v-img>
              <v-img
                :max-width="30"
                :max-height="30"
                :src="require(`~/static/matter/trash_icon.svg`)"
                class="message__context__edit__btns--trash"
                @click="removeMessage(i)"
              ></v-img>
            </div>
          </div>
          <p v-if="isLastTime(i)">{{ msg.created_at }}</p>
        </div>
        <div v-else class="chatContainer__body__messages--right">
          <div class="message__context">
            {{ msg.text }}
          </div>
          <p v-if="isLastTime(i)">{{ msg.created_at }}</p>
        </div>
      </div>
    </div>
    <div class="chatContainer__input">
      <textarea
        v-model="messageInput"
        name=""
        placeholder="メッセージを入力してください。"
      ></textarea>
      <div class="chatContainer__input__btns">
        <v-img
          :max-width="13"
          :max-height="13"
          :src="require(`~/static/matter/upload_icon.svg`)"
          class="chatContainer__input__btns--upload"
        ></v-img>
        <v-img
          :max-width="16"
          :max-height="14"
          :src="require(`~/static/matter/sendMessage_icon.svg`)"
          class="chatContainer__input__btns--send"
          @click="sendMessage"
        ></v-img>
      </div>
    </div>
    <div class="chatContainer__uploads">
      <div class="chatContainer__uploads__btn">
        <v-img
          :max-width="13"
          :max-height="13"
          :src="require(`~/static/matter/upload_icon.svg`)"
          class="chatContainer__input__btns--upload"
        ></v-img>
        プリウス 車両カタログ.pdf
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatContainer',
  data() {
    return {
      messageInput: '',
      editing: null,
      messages: [
        {
          id: 1,
          target: 'charge',
          text: 'AI査定ギガ買取のお申し込みありがとうございます。',
          created_at: '2020/02/25 10:24',
        },
        {
          id: 2,
          target: 'charge',
          text: '担当させていただく田中と申します。',
          created_at: '2020/02/25 10:24',
        },
        {
          id: 3,
          target: 'customer',
          text: 'よろしくお願いします。。',
          created_at: '2020/03/01 09:13',
        },
      ],
    }
  },
  mounted() {
    this.scrollToBottom()
  },
  methods: {
    sendMessage() {
      const date = new Date()
      const newMessage = {
        id: Math.floor(Math.random() * 100),
        target: 'charge',
        text: this.messageInput,
        created_at: `${date.getFullYear()}/${
          date.getMonth() + 1
        }/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`,
      }
      this.messages = [...this.messages, newMessage]
      this.messageInput = ''
      setTimeout(() => {
        this.scrollToBottom()
      }, 100)
    },
    editMessage(target) {
      if (this.messages[target].target === 'charge') {
        if (this.editing === target) {
          this.editing = null
        } else {
          this.editing = target
        }
      }
    },
    removeMessage(target) {
      const result = this.messages.filter((msg, i) => target !== i)
      this.messages = [...result]
    },
    scrollToBottom() {
      this.$refs.chatBody.scrollTo(0, this.$refs.chatBody.scrollHeight)
    },
    isLastTime(target) {
      if (
        target + 1 < this.messages.length &&
        this.messages[target].target === this.messages[target + 1].target
      )
        return false
      return true
    },
  },
}
</script>
<style lang="scss" scoped>
.chatContainer {
  width: 100%;
  padding: 25px 20px;
  &__title {
    font-size: 18px;
    font-weight: bold;
    color: $blue-200;
    margin-bottom: 20px;
  }
  &__body {
    width: 100%;
    height: 260px;
    border-radius: 4px;
    border: solid 1px $gray-100;
    background-color: $white-100;
    margin-bottom: 20px;
    padding: 21px;
    overflow: scroll;
    overflow-x: hidden;
    scrollbar-color: $blue-100;
    &::-webkit-scrollbar {
      width: 3px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: $blue-100;
    }
    &__messages {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 30px;
      & > div {
        width: max-content;
        max-width: 250px;
        .message__context {
          font-size: 13px;
          margin-bottom: 10px;
          padding: 8px 12px;
          display: inline-block;
        }
        & > p {
          font-size: 11px;
          color: $blue-500;
        }
      }
      &--left {
        .message__context {
          background-color: $white-300;
          color: $blue-200;
          border-radius: 20px 20px 20px 0;
          position: relative;
          &__input {
            width: max-content;
            height: 100%;
            font-size: 13px;
            color: $blue-500;
          }
          &__edit {
            position: absolute;
            top: 50%;
            transform: translateX(250px) translateY(-50%);
            display: flex;
            .v-image {
              margin-right: 0;
              cursor: pointer;
            }
          }
        }
      }
      &--right {
        grid-column: 2/3;
        justify-self: flex-end;
        .message__context {
          background-color: $blue-400;
          color: $white-300;
          border-radius: 20px 20px 0 20px;
        }
      }
    }
  }
  &__input {
    width: 100%;
    height: 75px;
    border-radius: 4px;
    border: solid 1px #dfe6f0;
    position: relative;
    margin-bottom: 10px;
    & > textarea {
      width: 100%;
      height: 100%;
      resize: none;
      padding: 10px 10px;
      font-size: 11px;
      &::placeholder {
        color: $blue-500;
      }
    }
    &__btns {
      position: absolute;
      bottom: 10px;
      right: 10px;
      display: flex;
      & > .v-image {
        cursor: pointer;
      }
      &--upload {
        margin-right: 11px;
      }
    }
  }

  &__uploads {
    display: flex;
    &__btn {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 15px;
      border: solid 1px $gray-100;
      background-color: $white-300;
      padding: 9px 30px;
      font-size: 11px;
      color: $blue-100;
      position: relative;
      cursor: pointer;
      .v-image {
        position: absolute;
        left: 10px;
      }
    }
  }
}
</style>
