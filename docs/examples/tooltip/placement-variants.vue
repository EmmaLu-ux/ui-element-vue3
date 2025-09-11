<template>
  <div class="variants-flex">
    <div class="row-top">
      <ue-tooltip placement="top-start" content="top-start">
        <ue-button>top-start</ue-button>
      </ue-tooltip>
      <ue-tooltip placement="top" content="top">
        <ue-button>top</ue-button>
      </ue-tooltip>
      <ue-tooltip placement="top-end" content="top-end">
        <ue-button>top-end</ue-button>
      </ue-tooltip>
    </div>
    <div class="middle">
      <div class="col-left">
        <ue-tooltip placement="left-start" content="left-start">
          <ue-button>left-start</ue-button>
        </ue-tooltip>
        <ue-tooltip placement="left" content="left">
          <ue-button>left</ue-button>
        </ue-tooltip>
        <ue-tooltip placement="left-end" content="left-end">
          <ue-button>left-end</ue-button>
        </ue-tooltip>
      </div>
      <div class="col-right">
        <ue-tooltip placement="right-start" content="right-start">
          <ue-button>right-start</ue-button>
        </ue-tooltip>
        <ue-tooltip placement="right" content="right">
          <ue-button>right</ue-button>
        </ue-tooltip>
        <ue-tooltip placement="right-end" content="right-end">
          <ue-button>right-end</ue-button>
        </ue-tooltip>
      </div>
    </div>
    <div class="row-bottom">
      <ue-tooltip placement="bottom-start" content="bottom-start">
        <ue-button>bottom-start</ue-button>
      </ue-tooltip>
      <ue-tooltip placement="bottom" content="bottom">
        <ue-button>bottom</ue-button>
      </ue-tooltip>
      <ue-tooltip placement="bottom-end" content="bottom-end">
        <ue-button>bottom-end</ue-button>
      </ue-tooltip>
    </div>
  </div>
</template>

<style scoped>
.variants-flex {
  --line-width: 520px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  min-height: 220px;
}
.row-top,
.row-bottom,
.middle {
  width: var(--line-width);
}
.row-top,
.row-bottom {
  display: flex;
  justify-content: center;
  gap: 12px;
}
.middle {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.col-left,
.col-right {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
