import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { CharacterStoreModel } from "../character-store/character-store"
import { GroupModel } from "../group/group"
/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStoreModel = types.model("RootStore").props({
  characterStore: types.optional(CharacterStoreModel, {} as any),
  groupStore: types.optional(types.array(GroupModel), [])
})
.actions(self => ({
  addGroupsBatch(groups: typeof GroupModel[]){ self.groupStore.concat(groups) },
  addGroup(group: typeof GroupModel){ self.groupStore.push(group) }
}))

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
