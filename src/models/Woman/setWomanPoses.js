import { initialWomanPose } from "./initialWomanPose";

export const setwomanPoses = (pose, nodes) => {
  switch (pose) {
    /**
     *
     *  Pose on the side
     *
     */
    case "Pose_0": {
      initialWomanPose(nodes);
      nodes["mixamorigLeftShoulder_08"].rotation.x = 1.5636573071467672;
      nodes["mixamorigLeftShoulder_08"].rotation.y = -0.75;
      nodes["mixamorigLeftShoulder_08"].rotation.z = -1.5990082895108586;
      break;
    }
    /**
     *
     *  Right hand on the head and left hand on the chest
     *
     */
    case "Pose_1": {
      initialWomanPose(nodes);
      nodes["mixamorigSpine1_03"].rotation.x = -0.087;
      nodes["mixamorigNeck_05"].rotation.x = 0.072;
      nodes["mixamorigNeck_05"].rotation.y = 0;
      nodes["mixamorigNeck_05"].rotation.z = 0;
      nodes["mixamorigHead_06"].rotation.x = -0.246;
      nodes["mixamorigHead_06"].rotation.y = 0;
      nodes["mixamorigHead_06"].rotation.z = 0;
      nodes["mixamorigLeftShoulder_08"].rotation.x = -5.74;
      nodes["mixamorigLeftShoulder_08"].rotation.y = -0.406;
      nodes["mixamorigLeftShoulder_08"].rotation.z = -1.441;
      nodes["mixamorigLeftArm_09"].rotation.x = 0.63;
      nodes["mixamorigLeftArm_09"].rotation.y = 0.391;
      nodes["mixamorigLeftArm_09"].rotation.z = 0.311;
      nodes["mixamorigLeftForeArm_010"].rotation.x = 0.072;
      nodes["mixamorigLeftForeArm_010"].rotation.y = -0.246;
      nodes["mixamorigLeftForeArm_010"].rotation.z = -3.75;
      nodes["mixamorigLeftHand_011"].rotation.x = -0.087;
      nodes["mixamorigLeftHand_011"].rotation.z = -0.007;
      nodes["mixamorigRightShoulder_032"].rotation.x = 0.411;
      nodes["mixamorigRightShoulder_032"].rotation.y = 0.291;
      nodes["mixamorigRightShoulder_032"].rotation.z = 1.744;
      nodes["mixamorigRightArm_033"].rotation.x = 1.266;
      nodes["mixamorigRightArm_033"].rotation.y = -0.406;
      nodes["mixamorigRightArm_033"].rotation.z = 0.47;
      nodes["mixamorigRightForeArm_034"].rotation.x = 0.391;
      nodes["mixamorigRightForeArm_034"].rotation.y = -1.281;
      nodes["mixamorigRightForeArm_034"].rotation.z = -1.441;
      nodes["mixamorigRightHand_035"].rotation.x = 0.311;
      nodes["mixamorigRightHand_035"].rotation.y = 0.55;
      nodes["mixamorigRightHand_035"].rotation.z = -0.087;
      nodes["mixamorigRightHandThumb2_037"].rotation.x = 0.072;
      nodes["mixamorigRightHandIndex1_040"].rotation.x = 0.55;
      nodes["mixamorigRightHandIndex2_041"].rotation.x = 0.47;
      nodes["mixamorigRightHandMiddle1_044"].rotation.x = 0.55;
      nodes["mixamorigRightHandMiddle2_045"].rotation.x = -5.82;
      nodes["mixamorigRightHandMiddle3_00"].rotation.x = -5.661;
      nodes["mixamorigRightHandRing1_047"].rotation.x = 0.63;
      nodes["mixamorigRightHandRing1_047"].rotation.y = 0.152;
      nodes["mixamorigRightHandRing2_048"].rotation.x = 0.391;
      nodes["mixamorigRightHandPinky1_051"].rotation.x = 0.391;
      nodes["mixamorigRightHandPinky2_052"].rotation.x = 0.789;

      break;
    }
    /**
     *
     *  Fuck you owner
     *
     */
    case "Pose_2": {
      initialWomanPose(nodes);
      nodes["mixamorigSpine_02"].rotation.x = 0.152;
      nodes["mixamorigSpine_02"].rotation.y = -0.007;
      nodes["mixamorigSpine_02"].rotation.z = 0;
      nodes["mixamorigSpine1_03"].rotation.x = 0;
      nodes["mixamorigSpine1_03"].rotation.y = -0.406;
      nodes["mixamorigSpine1_03"].rotation.z = 0;
      nodes["mixamorigNeck_05"].rotation.x = 0.152;
      nodes["mixamorigNeck_05"].rotation.y = -0.406;
      nodes["mixamorigNeck_05"].rotation.z = 0;
      nodes["mixamorigLeftShoulder_08"].rotation.x = -4.068;
      nodes["mixamorigLeftShoulder_08"].rotation.y = -0.644;
      nodes["mixamorigLeftShoulder_08"].rotation.z = -1.68;
      nodes["mixamorigLeftArm_09"].rotation.x = 1.187;
      nodes["mixamorigLeftForeArm_010"].rotation.x = -0.246;
      nodes["mixamorigLeftForeArm_010"].rotation.y = -0.167;
      nodes["mixamorigLeftForeArm_010"].rotation.z = 0.231;
      nodes["mixamorigRightArm_033"].rotation.x = 0.6486689745150157;
      nodes["mixamorigRightArm_033"].rotation.y = -0.08109214025851075;
      nodes["mixamorigRightArm_033"].rotation.z = -0.644;
      nodes["mixamorigRightForeArm_034"].rotation.x = 0.391;
      nodes["mixamorigRightForeArm_034"].rotation.y = 0.47;
      nodes["mixamorigRightForeArm_034"].rotation.z = -1.68;
      nodes["mixamorigRightHand_035"].rotation.x = 0.311;
      nodes["mixamorigRightHand_035"].rotation.y = 7.238;
      nodes["mixamorigRightHand_035"].rotation.z = -0.167;
      nodes["mixamorigRightHandThumb1_036"].rotation.x = -0.087;
      nodes["mixamorigRightHandThumb1_036"].rotation.y = -1.839;
      nodes["mixamorigRightHandThumb2_037"].rotation.x = 0.391;
      nodes["mixamorigRightHandThumb3_038"].rotation.x = 0.789;
      nodes["mixamorigRightHandThumb3_038"].rotation.y = -0.167;
      nodes["mixamorigRightHandIndex2_041"].rotation.x = 2.142;
      nodes["mixamorigRightHandIndex3_042"].rotation.x = 1.585;
      nodes["mixamorigRightHandRing2_048"].rotation.x = 1.983;
      nodes["mixamorigRightHandRing3_049"].rotation.x = 1.505;
      nodes["mixamorigRightHandPinky2_052"].rotation.x = 2.54;
      nodes["mixamorigRightHandPinky3_053"].rotation.x = 1.107;
      break;
    }
    /**
     *
     *  Foot crossed into leg
     *
     */
    case "Pose_3": {
      nodes["mixamorigLeftUpLeg_055"].rotation.x = 0.072;
      nodes["mixamorigLeftUpLeg_055"].rotation.z = -3.192;
      nodes["mixamorigLeftFoot_057"].rotation.x = 0.948;
      nodes["mixamorigLeftFoot_057"].rotation.z = 6.203;
      nodes["mixamorigRightUpLeg_060"].rotation.x = -0.326;
      nodes["mixamorigRightUpLeg_060"].rotation.y = -0.087;
      nodes["mixamorigRightUpLeg_060"].rotation.z = 3.257;
      nodes["mixamorigRightLeg_061"].rotation.x = -1.281;
      nodes["mixamorigRightLeg_061"].rotation.z = 0.072;
      nodes["mixamorigRightFoot_062"].rotation.x = 0.789;
      nodes["mixamorigRightFoot_062"].rotation.z = 0.391;
      nodes["mixamorigRightToeBase_063"].rotation.x = 1.187;
      nodes["mixamorigRightToeBase_063"].rotation.y = -0.246;
      break;
    }
  }
};
